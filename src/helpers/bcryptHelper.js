import bcrypt from 'bcryptjs';

const saltRound = 10;
export const hassPassword = plainPassword => {
    return bcrypt.hashSync(plainPassword, saltRound);
}