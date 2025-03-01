import { SetMetadata } from '@nestjs/common';

export enum Role {
  Student = 'student',
  Librarian = 'librarian',
}

export const ROLES_KEY = 'roles';
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
