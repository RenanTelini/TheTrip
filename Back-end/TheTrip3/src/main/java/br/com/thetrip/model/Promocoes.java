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
public class Promocoes implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int Id_Promocao;
	private float Valor_Promocao;

	
	@JsonIgnore
	@OneToMany(mappedBy = "promocoes")
	private List<Clientes> clientes = new ArrayList<Clientes>();

	//Construtor vazio
	public Promocoes() {
		super();
	}
	
	//Construtor com id e atributos
	public Promocoes(int id_Promocao, float valor_Promocao) {
		super();
		this.Id_Promocao = id_Promocao;
		this.Valor_Promocao = valor_Promocao;
	}

	public int getId_Promocao() {
		return Id_Promocao;
	}

	public void setId_Promocao(int id_Promocao) {
		Id_Promocao = id_Promocao;
	}

	public float getValor_Promocao() {
		return Valor_Promocao;
	}

	public void setValor_Promocao(float valor_Promocao) {
		Valor_Promocao = valor_Promocao;
	}
	
	public List<Clientes> getClientes() {
		return clientes;
	}

	//HasCode e equals
	@Override
	public int hashCode() {
		return Objects.hash(Id_Promocao);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Promocoes other = (Promocoes) obj;
		return Id_Promocao == other.Id_Promocao;
	}
	
}
