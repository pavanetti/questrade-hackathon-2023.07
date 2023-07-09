using System;
namespace loan_application_api.Domain.Models;

public class CreditSimulationOption
{
    /// <summary>
    /// Total of monthly installments
    /// </summary>
    /// <example>12</example>
    public int Installments { get; set; }

    /// <summary>
    /// Lower simulated monthly payment for this installment option
    /// </summary>
    /// <example>320.15</example>
    public decimal MinInstallment { get; set; }

    /// <summary>
    /// Highest simulated monthly payment for this installment option
    /// </summary>
    /// <example>589.75</example>
    public decimal MaxInstallment { get; set; }
}
