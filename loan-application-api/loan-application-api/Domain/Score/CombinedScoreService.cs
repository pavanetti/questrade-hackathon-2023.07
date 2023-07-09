using System;

namespace loan_application_api.Domain.Score;

public class CombinedScoreService : IScoreService
{
    private record WeightedService(IScoreService Service, int Weight);

    private readonly IEnumerable<WeightedService> services;

    public CombinedScoreService(IEnumerable<IScoreService> services, IEnumerable<int> weights)
    {
        this.services = services.Zip(weights).Select(each => new WeightedService(each.First, each.Second));
    }

    async Task<int> IScoreService.Score(Models.Document document)
    {
        var scores = await Task.WhenAll(
            services.Select(async each => each.Weight * await each.Service.Score(document))
        );

        var totalWeight = services.Select(each => each.Weight).Sum();
        return scores.Sum() / totalWeight;
    }
}

