namespace Infrastructure.Data
{
    using System;
    using System.Collections.Generic;
    using System.IO;
    using System.Linq;
    using System.Text.Json;
    using System.Threading.Tasks;
    using Core.Entities;
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

                    foreach (var item in categories)
                    {
                        context.ProductCategories.Add(item);
                    }

                    await context.SaveChangesAsync();
                }

                if (!context.Products.Any())
                {
                    var productData = File.ReadAllText("../Infrastructure/Data/SeedData/Products_json.json");

                    var products = JsonSerializer.Deserialize<List<Product>>(productData);

                    foreach (var item in products)
                    {
                        context.Products.Add(item);
                    }

                    await context.SaveChangesAsync();
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

                    foreach (var item in options)
                    {
                        context.Options.Add(item);
                    }

                    await context.SaveChangesAsync();
                }

                if (!context.OptionValues.Any())
                {
                    var optionValuesData = File.ReadAllText("../Infrastructure/Data/SeedData/OptionValues_json.json");

                    var optionValues = JsonSerializer.Deserialize<List<OptionValue>>(optionValuesData);

                    foreach (var item in optionValues)
                    {
                        context.OptionValues.Add(item);
                    }

                    await context.SaveChangesAsync();
                }

                if (!context.ProductVariantOptions.Any())
                {
                    var productVariantOptionsData = File.ReadAllText("../Infrastructure/Data/SeedData/ProductVariantOptions_json.json");

                    var productVariantOptions = JsonSerializer.Deserialize<List<ProductVariantOption>>(productVariantOptionsData);

                    foreach (var item in productVariantOptions)
                    {
                        context.ProductVariantOptions.Add(item);
                    }

                    await context.SaveChangesAsync();
                }

                if (!context.ProductVariants.Any())
                {
                    var productVariantsData = File.ReadAllText("../Infrastructure/Data/SeedData/ProductVariants_json.json");

                    var productVariants = JsonSerializer.Deserialize<List<ProductVariant>>(productVariantsData);

                    foreach (var item in productVariants)
                    {
                        context.ProductVariants.Add(item);
                    }

                    await context.SaveChangesAsync();
                }

                if (!context.SKUs.Any())
                {
                    var skuData = File.ReadAllText("../Infrastructure/Data/SeedData/SKUs_json.json");

                    var Skus = JsonSerializer.Deserialize<List<SKU>>(skuData);

                    foreach (var item in Skus)
                    {
                        context.SKUs.Add(item);
                    }

                    await context.SaveChangesAsync();
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