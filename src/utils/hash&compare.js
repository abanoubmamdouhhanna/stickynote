import bcryptjs from 'bcryptjs'

export const hash =({plainText="",saltRound=process.env.salt_round}={})=>
{
    const hashResult=bcryptjs.hashSync(plainText,parseInt(saltRound))
    return hashResult

}

export const compare=({plainText="",hashValue=""}={})=>
{

    const match=bcryptjs.compareSync(plainText,hashValue)
    return match
}