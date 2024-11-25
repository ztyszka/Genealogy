using Genealogy.Server.Models;

namespace Genealogy.Server.Services;

public interface IPersonService
{
    IEnumerable<Person> GetPersons();
    Person? GetPersonById(int id);
    void AddPerson(Person person);
}

public class PersonService : IPersonService
{
    private readonly List<Person> _persons = [];

    public Person? GetPersonById(int id)
    {
        return _persons.FirstOrDefault(person => person.Id == id);
    }

    public void AddPerson(Person person)
    {
        _persons.Add(person);
    }

    public IEnumerable<Person> GetPersons()
    {
        return _persons;
    }
}