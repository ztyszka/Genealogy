namespace Genealogy.Server.Models;

public class Person
{
    public int Id { get; set; }
    public string? FirstName { get; set; }
    public string? LastName { get; set;}
    public int? BirthDay { get; set; }
    public int? BirthMonth { get; set; }
    public int? BirthYear { get; set; }
    public int? BirthYearSpanFrom { get; set; }
    public int? BirthYearSpanTo { get; set; }
    public int? DeathDay { get; set; }
    public int? DeathMonth { get;set; }
    public int? DeathYear { get;set; }
    public int? DeathYearSpanFrom { get; set; }
    public int? DeathYearSpanTo { get; set; }
    public int? ParentOneId { get; set; }
    public int? ParentTwoId { get;set; }
}