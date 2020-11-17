namespace Infrastructure.Data.Config
{
    using Core.Entities;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Metadata.Builders;

    public class ProductCategoryConfiguration
    : IEntityTypeConfiguration<ProductCategory>
    {
        public void Configure(EntityTypeBuilder<ProductCategory> builder)
        {
            builder.HasOne(pc => pc.Parent)
                   .WithMany(pc => pc.Children)
                   .HasForeignKey(pc => pc.ParentId);
        }
    }
}