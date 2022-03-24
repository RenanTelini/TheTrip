package br.com.thetrip.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.thetrip.model.Promocoes;

@Repository
public interface PromocoesRepository extends JpaRepository<Promocoes, Integer>{

}
