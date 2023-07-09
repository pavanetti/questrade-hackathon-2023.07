using System;
namespace loan_application_api.Domain.Models;

public class InvalidDocumentException : Exception
{
    public InvalidDocumentException(string document)
        : base(String.Format("Invalid Document {0}", document))
    {
    }
}

