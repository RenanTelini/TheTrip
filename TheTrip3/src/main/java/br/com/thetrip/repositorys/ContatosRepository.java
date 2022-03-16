package br.com.thetrip.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.thetrip.model.Contatos;

@Repository
public interface ContatosRepository extends JpaRepository<Contatos, Integer>{

}
