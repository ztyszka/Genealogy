using Genealogy.Server.Models;
using Genealogy.Server.Services;
using Microsoft.AspNetCore.Mvc;

namespace Genealogy.Server.Controllers;

[ApiController]
[Route("persons")]
public class PersonController: ControllerBase
{
    private IPersonService _personService;
    public PersonController(IPersonService personService)
    {
        _personService = personService;
    }

    [HttpGet]
    public IEnumerable<Person> GetPersons()
    {
        return _personService.GetPersons();
    }

    [HttpGet("{id}")]
    public Person? GetPerson([FromRoute] int id)
    {
        return _personService.GetPersonById(id);
    }

    [HttpPost("new")]
    public IActionResult NewPerson([FromBody] Person person)
    {
        _personService.AddPerson(person);
        return Ok();
    }
}