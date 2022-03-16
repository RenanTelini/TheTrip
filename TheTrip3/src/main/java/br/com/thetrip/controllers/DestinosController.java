package br.com.thetrip.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.thetrip.model.Destinos;
import br.com.thetrip.repositorys.DestinosRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/destinos")
public class DestinosController {
	
	@Autowired
	private DestinosRepository destinosRepository;
	
	// GET
	@GetMapping
	public ResponseEntity<List<Destinos>> findAll() {
		
		List<Destinos> destinos = destinosRepository.findAll();
		
		return ResponseEntity.ok().body(destinos);
	}
	
	// GET por id
	@GetMapping(value = "/{id}")
	public ResponseEntity<Destinos> findById(@PathVariable Integer Id_Promocao) {
		
		Destinos destinos = destinosRepository.findById(Id_Promocao).get();
		
		return ResponseEntity.ok().body(destinos);
	}
	
	
	// CREATE
    @PostMapping
    public Destinos create(@RequestBody Destinos destinos) {
    	
        return destinosRepository.save(destinos);
    }
    
    // UPDATE
    @PutMapping("{id}")
    public ResponseEntity<Destinos> update(@PathVariable Integer Id_Promocao,@RequestBody Destinos destinosDetails) {
    	Destinos updateDestinos = destinosRepository.findById(Id_Promocao).get();

    	updateDestinos.setCidade_Destino(destinosDetails.getCidade_Destino());
    	updateDestinos.setEstado_Destino(destinosDetails.getEstado_Destino());

    	destinosRepository.save(updateDestinos);

        return ResponseEntity.ok(updateDestinos);
    }
    
    //DELETE
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable Integer Id_Promocao) {

    	Destinos destinos = destinosRepository.findById(Id_Promocao).get();

    	destinosRepository.delete(destinos);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
