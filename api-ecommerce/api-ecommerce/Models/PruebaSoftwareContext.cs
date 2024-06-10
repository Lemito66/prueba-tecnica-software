using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace api_ecommerce.Models;

public partial class PruebaSoftwareContext : DbContext
{
    public PruebaSoftwareContext()
    {
    }

    public PruebaSoftwareContext(DbContextOptions<PruebaSoftwareContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Customer> Customers { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {

    }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Customer>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Customer__3214EC07442DDF15");

            entity.Property(e => e.FirstName).HasMaxLength(50);
            entity.Property(e => e.LastName).HasMaxLength(50);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
