import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'varchar', length: 20 })
  nom: string;

  @Column({ type: 'varchar', length: 20 })
  prenom: string;

  @Column({ type: 'date' })
  dateNaissance: Date;

  @Column({ nullable: true })
  telephone: string;

  @Column({ type: 'varchar', length: 300 })
  adresse: string;
}
