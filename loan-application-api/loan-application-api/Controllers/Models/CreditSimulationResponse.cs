using System;
using loan_application_api.Domain.Models;

namespace loan_application_api.Controllers.Models;

public class CreditSimulationResponse
{
    /// <summary>
    /// The amount of credit requested
    /// </summary>
    /// <example>4500.99</example>
    public decimal Request { get; set; }

    /// <summary>
    /// Simulated installment options with a range of installment monthly payments.
    /// </summary>
    public required IEnumerable<CreditSimulationOption> Options { get; set; }
}
