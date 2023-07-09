using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using loan_application_api.Controllers.Models;
using loan_application_api.Domain;
using loan_application_api.Domain.Lead;
using loan_application_api.Domain.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace loan_application_api.Controllers;

[ApiController]
[Route("[controller]")]
[EnableCors("LoanAppFrontend")]
public class CreditSimulationController : ControllerBase
{
    private readonly ILogger<CreditSimulationController> logger;

    private readonly CreditSimulationService simulationService;
    private readonly LeadService leadService;

    public CreditSimulationController(ILogger<CreditSimulationController> logger)
    {
        this.logger = logger;
        this.simulationService = new(logger);
        this.leadService = new();
    }

    /// <summary>
    /// Computes credit simulation proposal.
    /// </summary>
    /// <remarks>
    /// Queries customer score on score providers to compute a credit simulation proposal.
    /// </remarks>
    /// <param name="simRequest">Customer informations and amount requested.</param>
    /// <response code="200">Returns the credit simulated options</response>
    /// <response code="400">If the parameters are invalid</response>
    [HttpGet(Name = "GetCreditSimulationOptions")]
    [ProducesResponseType(typeof(CreditSimulationResponse), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<CreditSimulationResponse> Index([FromQuery] CreditSimulationRequest simRequest)
    {
        IEnumerable<CreditSimulationOption> options;
        try
        {
            logger.LogDebug("Starting simulation: R$ {Request}", simRequest.Request);
            options = await simulationService.Simulations(new()
            {
                Amount = simRequest.Request,
                Document = simRequest.Document
            });
        }
        catch (InvalidDocumentException ex)
        {
            logger.LogError("Received invalid document: {Message}", ex.Message);
            throw new BadHttpRequestException(ex.Message, ex);
        }

        await leadService.SaveLead(simRequest.FullName, simRequest.Email, simRequest.Request);
        _ = leadService.SendSimulationByEmail(simRequest.FullName, simRequest.Email, options);
        return new CreditSimulationResponse
        {
            Request = simRequest.Request,
            Options = options,
        };
    }
}
