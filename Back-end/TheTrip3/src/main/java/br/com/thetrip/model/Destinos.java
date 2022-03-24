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
public class Destinos implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int Id_Destino;
	private String Cidade_Destino;
	private String Estado_Destino;

	@JsonIgnore
	@OneToMany(mappedBy = "destinos")
	private List<Clientes> clientes = new ArrayList<Clientes>();
	

	//Construtor vazio
	public Destinos() {
		super();
	}
	
	//Construtor com id e atributos
	public Destinos(int id_Destino, String cidade_Destino, String estado_Destino) {
		super();
		this.Id_Destino = id_Destino;
		this.Cidade_Destino = cidade_Destino;
		this.Estado_Destino = estado_Destino;
	}
	
	
	public int getId_Destino() {
		return Id_Destino;
	}

	public void setId_Destino(int id_Destino) {
		Id_Destino = id_Destino;
	}

	public String getCidade_Destino() {
		return Cidade_Destino;
	}

	public void setCidade_Destino(String cidade_Destino) {
		Cidade_Destino = cidade_Destino;
	}

	public String getEstado_Destino() {
		return Estado_Destino;
	}

	public void setEstado_Destino(String estado_Destino) {
		Estado_Destino = estado_Destino;
	}
	
	public List<Clientes> getClientes() {
		return clientes;
	}

	//HasCode e equals
	@Override
	public int hashCode() {
		return Objects.hash(Id_Destino);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Destinos other = (Destinos) obj;
		return Objects.equals(Id_Destino, other.Id_Destino);
	}
	
}
