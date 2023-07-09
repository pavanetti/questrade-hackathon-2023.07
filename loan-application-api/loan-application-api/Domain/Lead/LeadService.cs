using System;
using loan_application_api.Domain.Models;

namespace loan_application_api.Domain.Lead;

public class LeadService
{
    public Task SaveLead(string name, string email, decimal amount)
    {
        //using (var context = new LeadEntityContext())
        //{
        //    var lead = new Lead { Name = name, Email = email, Amount = amount };
        //    context.Lead.Add(lead);

        //    context.SaveChanges();
        //}
        return Task.Run(() => { });
    }

    public Task SendSimulationByEmail(string name, string email, IEnumerable<CreditSimulationOption> options)
    {
        //var emailTemplate = FindTemplate("new_lead_simulation_options");
        //emailTemplate.AddParam("name", name);
        //emailTemplate.AddParam("options", options);
        //IEmailDeliveryService.SendEmail(emailTemplate, email); // <- Implemented by SendgridDeliveryService, AwsSesDeliveryService...
        return Task.Run(() => { });
    }
}
