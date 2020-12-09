namespace Infrastructure.Data
{
    using System;
    using System.Collections.Generic;
    using System.IO;
    using System.Linq;
    using System.Text.Json;
    using System.Threading.Tasks;
    using Core.Entities;
    using Core.Entities.OrderAggregate;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.Logging;

    public class StoreContextSeed
    {
        public static async Task SeedAsync(
            StoreContext context,
            ILoggerFactory loggerFactory)
        {
            try
            {
                if (!context.ProductCategories.Any())
                {
                    var categoryData = File.ReadAllText("../Infrastructure/Data/SeedData/ProductCategories_json.json");

                    var categories = JsonSerializer.Deserialize<List<ProductCategory>>(categoryData);

                        try
                        {
                            foreach (var item in categories)
                            {
                                context.ProductCategories.Add(item);
                                context.Database.OpenConnection();
                                await context.Database.ExecuteSqlCommandAsync("SET IDENTITY_INSERT dbo.ProductCategories ON");
                                context.Add(item);
                            }
                        }
                        finally
                        {
                            await context.SaveChangesAsync();
                            await context.Database.ExecuteSqlCommandAsync("SET IDENTITY_INSERT dbo.ProductCategories OFF");
                            context.Database.CloseConnection();
                        }
                }

                if (!context.Products.Any())
                {
                    var productData = File.ReadAllText("../Infrastructure/Data/SeedData/Products_json.json");

                    var products = JsonSerializer.Deserialize<List<Product>>(productData);

                        try
                        {
                            foreach (var item in products)
                            {
                                context.Products.Add(item);
                                context.Database.OpenConnection();
                                await context.Database.ExecuteSqlCommandAsync("SET IDENTITY_INSERT dbo.Products ON");
                                context.Add(item);
                            }
                        }
                        finally
                        {
                            await context.SaveChangesAsync();
                            await context.Database.ExecuteSqlCommandAsync("SET IDENTITY_INSERT dbo.Products OFF");
                            context.Database.CloseConnection();
                        }
                }

                if (!context.Products_ProductCategories.Any())
                {
                    var product_CategoriesData = File.ReadAllText("../Infrastructure/Data/SeedData/Product_Categories__json.json");

                    var product_Categories = JsonSerializer.Deserialize<List<Product_ProductCategory>>(product_CategoriesData);

                    foreach (var item in product_Categories)
                    {
                        context.Products_ProductCategories.Add(item);
                    }

                    await context.SaveChangesAsync();
                }

                if (!context.Options.Any())
                {
                    var optionsData = File.ReadAllText("../Infrastructure/Data/SeedData/Options_json.json");

                    var options = JsonSerializer.Deserialize<List<Option>>(optionsData);

                    try
                    {
                        foreach (var item in options)
                        {
                            context.Options.Add(item);
                            context.Database.OpenConnection();
                            await context.Database.ExecuteSqlCommandAsync("SET IDENTITY_INSERT dbo.Options ON");
                            context.Add(item);
                        }
                    }
                    finally
                    {
                        await context.SaveChangesAsync();
                        await context.Database.ExecuteSqlCommandAsync("SET IDENTITY_INSERT dbo.Options OFF");
                        context.Database.CloseConnection();
                    }
                }

                if (!context.OptionValues.Any())
                {
                    var optionValuesData = File.ReadAllText("../Infrastructure/Data/SeedData/OptionValues_json.json");

                    var optionValues = JsonSerializer.Deserialize<List<OptionValue>>(optionValuesData);

                    try
                    {
                        foreach (var item in optionValues)
                        {
                            context.OptionValues.Add(item);
                            context.Database.OpenConnection();
                            await context.Database.ExecuteSqlCommandAsync("SET IDENTITY_INSERT dbo.OptionValues ON");
                            context.Add(item);
                        }
                    }
                    finally
                    {
                        await context.SaveChangesAsync();
                        await context.Database.ExecuteSqlCommandAsync("SET IDENTITY_INSERT dbo.OptionValues OFF");
                        context.Database.CloseConnection();
                    }
                }

                if (!context.ProductVariantOptions.Any())
                {
                    var productVariantOptionsData = File.ReadAllText("../Infrastructure/Data/SeedData/ProductVariantOptions_json.json");

                    var productVariantOptions = JsonSerializer.Deserialize<List<ProductVariantOption>>(productVariantOptionsData);

                    try
                    {
                        foreach (var item in productVariantOptions)
                        {
                            context.ProductVariantOptions.Add(item);
                            context.Database.OpenConnection();
                            await context.Database.ExecuteSqlCommandAsync("SET IDENTITY_INSERT dbo.ProductVariantOptions ON");
                            context.Add(item);
                        }
                    }
                    finally
                    {
                        await context.SaveChangesAsync();
                        await context.Database.ExecuteSqlCommandAsync("SET IDENTITY_INSERT dbo.ProductVariantOptions OFF");
                        context.Database.CloseConnection();
                    }
                }
                
                if (!context.ProductVariants.Any())
                {
                    var productVariantsData = File.ReadAllText("../Infrastructure/Data/SeedData/ProductVariants_json.json");

                    var productVariants = JsonSerializer.Deserialize<List<ProductVariant>>(productVariantsData);

                    try
                    {
                        foreach (var item in productVariants)
                        {
                            context.ProductVariants.Add(item);
                            context.Database.OpenConnection();
                            await context.Database.ExecuteSqlCommandAsync("SET IDENTITY_INSERT dbo.ProductVariants ON");
                            context.Add(item);
                        }
                    }
                    finally
                    {
                        await context.SaveChangesAsync();
                        await context.Database.ExecuteSqlCommandAsync("SET IDENTITY_INSERT dbo.ProductVariants OFF");
                        context.Database.CloseConnection();
                    }
                }

                if (!context.SKUs.Any())
                {
                    var skuData = File.ReadAllText("../Infrastructure/Data/SeedData/SKUs_json.json");

                    var Skus = JsonSerializer.Deserialize<List<SKU>>(skuData);

                    try
                    {
                        foreach (var item in Skus)
                        {
                            context.SKUs.Add(item);
                            context.Database.OpenConnection();
                            await context.Database.ExecuteSqlCommandAsync("SET IDENTITY_INSERT dbo.SKUs ON");
                            context.Add(item);
                        }
                    }
                    finally
                    {
                        await context.SaveChangesAsync();
                        await context.Database.ExecuteSqlCommandAsync("SET IDENTITY_INSERT dbo.SKUs OFF");
                        context.Database.CloseConnection();
                    }
                }

                // ----------------------------------- //

                if (!context.DeliveryMethods.Any())
                {
                    var dmData = File.ReadAllText("../Infrastructure/Data/SeedData/delivery.json");

                    var methods = JsonSerializer.Deserialize<List<DeliveryMethod>>(dmData);

                    try
                    {
                        foreach (var item in methods)
                        {
                            context.DeliveryMethods.Add(item);
                            context.Database.OpenConnection();
                            await context.Database.ExecuteSqlCommandAsync("SET IDENTITY_INSERT dbo.DeliveryMethods ON");
                            context.Add(item);
                        }
                    }
                    finally
                    {
                        await context.SaveChangesAsync();
                        await context.Database.ExecuteSqlCommandAsync("SET IDENTITY_INSERT dbo.DeliveryMethods OFF");
                        context.Database.CloseConnection();
                    }
                }
            }
            catch (Exception ex)
            {
                var logger = loggerFactory.CreateLogger<StoreContextSeed>();
                logger.LogError(ex.Message);
            }
        }
    }
}