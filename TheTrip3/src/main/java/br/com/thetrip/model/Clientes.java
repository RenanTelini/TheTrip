package br.com.thetrip.model;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="clientes")
public class Clientes implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int Id_Cliente;
	private String Nome_Cliente;
	private String Cidade_Cliente;
	private String Estado_Cliente;
	
	@ManyToOne
	@JoinColumn(name = "fkcontato") //Chave estrangeira
	private Contatos contatos;
	
	@ManyToOne
	@JoinColumn(name = "fkdestino") //Chave estrangeira
	private Destinos destinos;
	
	@ManyToOne
	@JoinColumn(name = "fkpromocao") //Chave estrangeira
	private Promocoes promocoes;
	
	//Construtor vazio
	public Clientes() {
		super();
	}

	//Construtor cheio
	public Clientes(int id_Cliente, String nome_Cliente, String cidade_Cliente, String estado_Cliente,
			Contatos contatos, Destinos destinos, Promocoes promocoes) {
		super();
		this.Id_Cliente = id_Cliente;
		this.Nome_Cliente = nome_Cliente;
		this.Cidade_Cliente = cidade_Cliente;
		this.Estado_Cliente = estado_Cliente;
		this.contatos = contatos;
		this.destinos = destinos;
		this.promocoes = promocoes;
	}


	public int getId_Cliente() {
		return Id_Cliente;
	}


	public void setId_Cliente(int id_Cliente) {
		Id_Cliente = id_Cliente;
	}


	public String getNome_Cliente() {
		return Nome_Cliente;
	}


	public void setNome_Cliente(String nome_Cliente) {
		Nome_Cliente = nome_Cliente;
	}


	public String getCidade_Cliente() {
		return Cidade_Cliente;
	}


	public void setCidade_Cliente(String cidade_Cliente) {
		Cidade_Cliente = cidade_Cliente;
	}


	public String getEstado_Cliente() {
		return Estado_Cliente;
	}


	public void setEstado_Cliente(String estado_Cliente) {
		Estado_Cliente = estado_Cliente;
	}


	public Contatos getContatos() {
		return contatos;
	}


	public void setContatos(Contatos contatos) {
		this.contatos = contatos;
	}


	public Destinos getDestinos() {
		return destinos;
	}


	public void setDestinos(Destinos destinos) {
		this.destinos = destinos;
	}


	public Promocoes getPromocoes() {
		return promocoes;
	}


	public void setPromocoes(Promocoes promocoes) {
		this.promocoes = promocoes;
	}
	

	//HashCode e equals
	@Override
	public int hashCode() {
		return Objects.hash(Id_Cliente);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Clientes other = (Clientes) obj;
		return Id_Cliente == other.Id_Cliente;
	}

}
