package com.chitter;

import javax.persistence.*;

import lombok.Data;
import lombok.Generated;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.GenerationTime;

import java.io.Serializable;
import java.sql.Timestamp;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "peep")
public class Peep {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "peep")
    private String peep;

    @Column(name = "created_at")
    @CreationTimestamp
    private LocalDateTime createdAt;

    protected Peep() {
    }

    public Peep(String peep) {
        this.peep = peep;
    }

    public String getPeep() {
        return this.peep;
    }

    @Override
    public String toString() {
        return String.format("Peep[id=%d, peep='%s']", id, peep);
    }
}