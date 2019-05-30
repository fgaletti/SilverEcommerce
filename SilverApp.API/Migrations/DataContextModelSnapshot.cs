﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SilverApp.API.Data;

namespace SilverApp.API.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.4-rtm-31024")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("SilverApp.API.Models.Product", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("description")
                        .IsRequired()
                        .HasMaxLength(500);

                    b.Property<string>("image")
                        .HasMaxLength(300);

                    b.Property<byte>("isActive");

                    b.Property<byte>("isDownloadable");

                    b.Property<byte>("manageStock");

                    b.Property<string>("name")
                        .IsRequired()
                        .HasMaxLength(120);

                    b.Property<decimal>("price")
                        .HasColumnType("decimal(13, 4)");

                    b.Property<double>("quantity");

                    b.Property<string>("shortDescription")
                        .IsRequired()
                        .HasMaxLength(200);

                    b.Property<string>("sku")
                        .IsRequired()
                        .HasMaxLength(30);

                    b.HasKey("Id");

                    b.ToTable("Products");
                });

            modelBuilder.Entity("SilverApp.API.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasMaxLength(90);

                    b.Property<DateTime>("LastActive");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<byte[]>("PasswordHash");

                    b.Property<byte[]>("PasswordSalt");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<byte>("isAdmin");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });
#pragma warning restore 612, 618
        }
    }
}
