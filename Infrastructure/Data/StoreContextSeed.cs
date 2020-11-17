using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Core.Entities;
using Microsoft.Extensions.Logging;

namespace Infrastructure.Data
{
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

                
            }
            catch (Exception ex)
            {
                var logger = loggerFactory.CreateLogger<StoreContextSeed>();
                logger.LogError(ex.Message);
            }
        }
    }
}