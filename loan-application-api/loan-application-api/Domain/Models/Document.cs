using System;
namespace loan_application_api.Domain.Models;

public class Document
{
    private readonly string number;

    public Document(string number)
    {
        this.number = number;
        var isValid = IsCPF() || IsCNPJ();
        if (!isValid)
        {
            throw new InvalidDocumentException(number);
        }
    }


    bool IsCPF()
    {
        // TODO: validate digits
        return number.Length == 14;
    }

    bool IsCNPJ()
    {
        // TODO: validate digits
        return number.Length == 18;
    }
}
