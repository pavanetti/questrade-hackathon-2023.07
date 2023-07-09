# Build image
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build-env

WORKDIR /App

COPY . .

RUN dotnet restore
RUN dotnet publish -c Release -o out

# Final image
FROM mcr.microsoft.com/dotnet/aspnet:7.0

WORKDIR /App

COPY --from=build-env /App/out .

EXPOSE 80

ENTRYPOINT ["dotnet", "loan-application-api.dll"]
