using System;
namespace loan_application_api.Domain
{
    public interface IScoreService
    {
        public Task<int> Score(Models.Document document);
    }
}

