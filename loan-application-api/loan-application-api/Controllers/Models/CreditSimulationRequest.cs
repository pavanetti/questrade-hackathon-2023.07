using System;
namespace loan_application_api.Controllers.Models;

public class CreditSimulationRequest
{
    /// <summary>
    /// The amount of credit requested
    /// </summary>
    /// <example>4500.99</example>
    public decimal Request { get; set; }

    /// <summary>
    /// Full name of customer
    /// </summary>
    /// <example>José Maria Prado</example>
    public required string FullName { get; set; }

    /// <summary>
    /// Customer email
    /// </summary>
    /// <example>josemaria@example.com</example>
    public required string Email { get; set; }

    /// <summary>
    /// Customer document.
    /// Currently is accepted CPF and CNPJ.
    /// </summary>
    /// <example>012.345.678-90</example>
    public required string Document { get; set; }
}
