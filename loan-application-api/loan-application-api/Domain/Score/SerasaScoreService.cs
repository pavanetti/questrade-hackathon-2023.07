using System;

namespace loan_application_api.Domain.Score;

public class SerasaScoreService : IScoreService
{
    public SerasaScoreService()
    {
    }

    async Task<int> IScoreService.Score(Models.Document document)
    {
        await Task.Delay(500);
        return document.GetHashCode() % 60 + 40;
    }
}

