import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Company } from './company.entity';
import { ContactType } from './contact-type.entity';
import { Department } from './department.entity';
import { Role } from './role.entity';

@Entity('person')
export class Person extends BaseEntity {
  @Column({ name: 'first_name', type: 'varchar' })
  firstName: string;

  @Column({ name: 'middle_name', type: 'varchar', nullable: true })
  middleName: string;

  @Column({ name: 'last_name', type: 'varchar' })
  lastName: string;

  @Column({ name: 'staff', type: 'boolean' })
  staff: boolean;

  @Column({ name: 'phone', type: 'varchar' })
  phone: string;

  @Column({ name: 'email', type: 'varchar' })
  email: string;

  @Column({ name: 'role_id', type: 'uuid' })
  roleId: string;

  @Column({ name: 'contact_type_id', type: 'uuid' })
  contactTypeId: string;

  @Column({ name: 'department_id', type: 'uuid' })
  departmentId: string;

  @Column({ name: 'company_id', type: 'uuid' })
  companyId: string;

  //If seeders are failing comment these four attributes
  @ManyToOne(() => Role, {})
  role?: Promise<Role>;

  @ManyToOne(() => ContactType, {})
  contactType?: Promise<ContactType>;

  @ManyToOne(() => Department, {})
  department?: Promise<Department>;

  @ManyToOne(() => Company, {})
  company?: Promise<Company>;
}
