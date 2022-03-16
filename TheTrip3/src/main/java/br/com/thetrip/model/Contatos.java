package br.com.thetrip.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Contatos implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int Id_Contato;
	private String Email_Contato;
	private String Telefone_Contato;
	
	@JsonIgnore
	@OneToMany(mappedBy = "contatos")
	private List<Clientes> clientes = new ArrayList<Clientes>();

	
	public Contatos() {
		super();
	}
	
	public Contatos(int id_Contato, String email_Contato, String telefone_Contato) {
		super();
		this.Id_Contato = id_Contato;
		this.Email_Contato = email_Contato;
		this.Telefone_Contato = telefone_Contato;
	}

	
	public int getId_Contato() {
		return Id_Contato;
	}

	public void setId_Contato(int id_Contato) {
		Id_Contato = id_Contato;
	}

	public String getEmail_Contato() {
		return Email_Contato;
	}

	public void setEmail_Contato(String email_Contato) {
		Email_Contato = email_Contato;
	}

	public String getTelefone_Contato() {
		return Telefone_Contato;
	}

	public void setTelefone_Contato(String telefone_Contato) {
		Telefone_Contato = telefone_Contato;
	}
	
	public List<Clientes> getClientes() {
		return clientes;
	}

	@Override
	public int hashCode() {
		return Objects.hash(Id_Contato);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Contatos other = (Contatos) obj;
		return Id_Contato == other.Id_Contato;
	}
}
