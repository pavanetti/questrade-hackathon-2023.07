using System;
namespace loan_application_api.Configurations;

public class CorsPolicies
{
    public static void ConfigureCorsPolicies(WebApplicationBuilder builder)
    {
        builder.Services.AddCors(options =>
        {
            options.AddPolicy("LoanAppFrontend", policy =>
            {
                if (builder.Environment.IsDevelopment())
                {
                    policy.WithOrigins("http://localhost:5173");
                }
                if (builder.Environment.IsProduction())
                {
                    policy.WithOrigins("https://api.hackathoncredi.com");
                }
            });
        });
    }
}

