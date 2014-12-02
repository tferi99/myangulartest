package org.ftoth.myangulartest.controller;

import org.ftoth.myangulartest.model.Person;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

/**
 * @author ftoth
 *         2013.12.03. 10:55
 */
@Controller
@RequestMapping("/test")
public class PersonController
{
    private String dummy;
    private int dummyNum;

    private List<Person> personDB;

    public String getDummy()
    {
        return dummy;
    }

    public void setDummy(String dummy)
    {
        this.dummy = dummy;
    }



    @RequestMapping(value="persons", method = RequestMethod.GET)
    @ResponseBody
    public List<Person> getPersons()
    {
        return getPersonDB();
    }

    @RequestMapping(value="person/{id}", method = RequestMethod.GET)
    @ResponseBody
    public Person getPerson(@PathVariable long id)
    {
        for (Person p : getPersonDB()) {
            if (p.getId().longValue() == id) {
                return p;
            }
        }
        return null;
    }

    @RequestMapping(value="person", method = RequestMethod.POST)
    @ResponseBody
    public Person savePerson(@RequestBody Person person)
    {
        long maxId = -1L;
        List<Person> db = getPersonDB();
        for (int n=0; n<db.size(); n++) {
            Person p = db.get(n);
            long id = p.getId().longValue();

            // incoming id nut null and found in DB
            if (person.getId() != null) {
                if (id == person.getId()) {
                    db.set(n, person);
                    return person;
                }
            }
            else {
                if (id > maxId) {
                    maxId = id;
                }
            }
        }

        // incoming id is null or not found
        if (person.getId() == null) {
            person.setId(maxId + 1);
        }
        // add to DB
        getPersonDB().add(person);

        return person;
    }


    //-------------------------------- helpers -----------------------------------
    List<Person> getPersonDB()
    {
        if (personDB != null) {
            return personDB;
        }

        personDB = new ArrayList<Person>();
        personDB.add(new Person(1L, "John", "Smith", new String[] {"js@test.com", "js2@test.com", "js3@test.com"}));
        personDB.add(new Person(2L, "Jane", "Doe", new String[] {"jd@test.com"}));
        personDB.add(new Person(3L, "Jozsi", "Lofasz", new String[] {"lj@test.com"}));

        return personDB;
    }
}
