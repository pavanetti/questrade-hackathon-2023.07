using System;
using loan_application_api.Controllers;
using loan_application_api.Domain.Models;
using loan_application_api.Domain.Score;

namespace loan_application_api.Domain;

public class CreditSimulationService
{
    private readonly ILogger logger;

    public CreditSimulationService(ILogger logger)
    {
        this.logger = logger;
    }

    private readonly IScoreService scoreService = new CombinedScoreService(
        new IScoreService[] { new SerasaScoreService(), new InternalScoreService() },
        new[] { 2, 3 }
    );

    public async Task<IEnumerable<CreditSimulationOption>> Simulations(CreditSimulationData data)
    {
        var document = new Document(data.Document);

        logger.LogInformation("Querying score providers");
        var score = await scoreService.Score(document);

        logger.LogInformation("Computing fees");
        var installments = new int[] { 6, 12, 24, 36, 48, 60 };
        return installments.Select(installment =>
        {
            var noFees = data.Amount / installment;
            var withMinFees = noFees * (1 + MinFees(score, installment));
            var withMaxFees = noFees * (1 + MaxFees(score, installment));
            return new CreditSimulationOption
            {
                Installments = installment,
                MinInstallment = Math.Round(withMinFees, 2),
                MaxInstallment = Math.Round(withMaxFees, 2),
            };
        });
    }

    private static decimal MinFees(int score, int installment)
    {
        return (decimal)(Math.Log(installment) / (18 * (2 + score)));
    }

    private static decimal MaxFees(int score, int installment)
    {
        return (decimal)(Math.Log(installment) / (2 + score));
    }
}
