package br.com.thetrip.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.thetrip.model.Clientes;

@Repository
public interface ClientesRepository extends JpaRepository<Clientes, Integer>{

}
