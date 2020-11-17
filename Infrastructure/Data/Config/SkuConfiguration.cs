namespace Infrastructure.Data.Config
{
    using Core.Entities;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Metadata.Builders;

    public class SkuConfiguration : IEntityTypeConfiguration<SKU>
    {
        public void Configure(EntityTypeBuilder<SKU> builder)
        {
            builder.Property(p => p.Id).IsRequired();
            builder.Property(p => p.SkuName).IsRequired().HasMaxLength(60);
            builder.Property(p => p.StockQty).IsRequired();

            builder.Property(p => p.Price)
                .IsRequired()
                .HasColumnType("decimal(8,2)");
        }
    }
}