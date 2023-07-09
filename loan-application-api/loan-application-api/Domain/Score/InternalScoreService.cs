using System;

namespace loan_application_api.Domain.Score
{
    public class InternalScoreService : IScoreService
    {
        public InternalScoreService()
        {
        }

        // TODO: Daily update and cache Internal Score Table
        async Task<int> IScoreService.Score(Models.Document document)
        {
            await Task.Delay(200);
            var today = DateTime.Today;
            return (document.GetHashCode() + today.GetHashCode()) % 45 + 55;
        }
    }
}

