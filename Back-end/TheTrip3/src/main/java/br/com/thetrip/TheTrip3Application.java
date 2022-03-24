package br.com.thetrip;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import br.com.thetrip.model.Clientes;
import br.com.thetrip.model.Contatos;
import br.com.thetrip.model.Destinos;
import br.com.thetrip.model.Promocoes;
import br.com.thetrip.repositorys.ClientesRepository;
import br.com.thetrip.repositorys.ContatosRepository;
import br.com.thetrip.repositorys.DestinosRepository;
import br.com.thetrip.repositorys.PromocoesRepository;

@SpringBootApplication
public class TheTrip3Application implements CommandLineRunner {
	
	@Autowired
	private ClientesRepository clientesRepository;
	
	@Autowired
	private ContatosRepository contatosRepository;
	
	@Autowired
	private DestinosRepository destinosRepository;
	
	@Autowired
	private PromocoesRepository promocoesRepository;

	public static void main(String[] args) {
		SpringApplication.run(TheTrip3Application.class, args);
	}
	
	@Override
	public void run(String... args) throws Exception {
		
		
//		Promocoes p1 = new Promocoes();
//		p1.setValor_Promocao(2341.98F);
//
//		Destinos d1 = new Destinos();
//		d1.setCidade_Destino("WallaceLandia");
//		d1.setEstado_Destino("Terra do Nunca");
//
//		Contatos c1 = new Contatos();
//		c1.setEmail_Contato("emailinventado@gmail.com");
//		c1.setTelefone_Contato("95824-2935");
//		
//		Clientes cli = new Clientes();
//		cli.setNome_Cliente("Wallace Sam James");
//		cli.setCidade_Cliente("Interlagos");
//		cli.setEstado_Cliente("SP");
//		cli.setContatos(c1);
//		cli.setDestinos(d1);
//		cli.setPromocoes(p1);
//		
//		p1.getClientes().addAll(Arrays.asList(cli));
//		d1.getClientes().addAll(Arrays.asList(cli));
//		c1.getClientes().addAll(Arrays.asList(cli));
//		cli.getNome_Cliente();
//		cli.getCidade_Cliente();
//		cli.getEstado_Cliente();
//		
//		promocoesRepository.save(p1);
//		
//		destinosRepository.save(d1);
//		
//		contatosRepository.save(c1);
//		
//		clientesRepository.save(cli);
		
		
	}

}
