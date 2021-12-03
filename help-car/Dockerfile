#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["help-car/help-car.csproj", "help-car/"]
RUN dotnet restore "help-car/help-car.csproj"
COPY . .
WORKDIR "/src/help-car"
RUN dotnet build "help-car.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "help-car.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "help-car.dll"]