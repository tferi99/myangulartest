package org.ftoth.myangulartest.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Person implements Serializable
{
	private Long id;
	private String firstName;
	private String lastName;
    private List<String> emails = new ArrayList<String>();
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

    public List<String> getEmails()
    {
        return emails;
    }

    public void setEmails(List<String> emails)
    {
        this.emails = emails;
    }

    //-------------------------------- startup -----------------------------------

    public Person()
    {
    }

    public Person(Long id, String firstName, String lastName, String[] emails)
    {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.emails = Arrays.asList(emails);
    }
}
