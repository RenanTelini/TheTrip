package br.com.thetrip.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.thetrip.model.Destinos;

@Repository
public interface DestinosRepository extends JpaRepository<Destinos, Integer>{

}
