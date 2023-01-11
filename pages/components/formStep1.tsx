import { FormControl } from '@mui/joy'
import FormLabel from '@mui/joy/FormLabel'
import Input from '@mui/joy/Input'
import {FiMail, FiPhone, FiShoppingBag, FiInstagram} from 'react-icons/fi'

export default function FormStep1(){
    return(
        <div className="flex flex-col gap-2">
            <FormControl>
                <FormLabel 
                style={{
                    color: '#701210',
                    opacity: '0.8',
                    fontSize: '14px',
                }}
                >Nome e Sobrenome *</FormLabel>
                <Input
                 placeholder="Digite seu nome completo"
                 endDecorator={<FiMail />}
                 color='danger'
                 style={{
                    border: '1px solid #BE9493',
                    borderRadius: '8px',
                    filter: 'drop-shadow(px 6px 6px rgba(0, 0, 0, 0.35))',
                    color: '#701210',
                    opacity: '0.8',
                 }}
                 />
            </FormControl>

            <FormControl>
                <FormLabel 
                style={{
                    color: '#701210',
                    opacity: '0.8',
                    fontSize: '14px',
                }}
                >Whatsapp para contato *</FormLabel>
                <Input
                 placeholder="Digite whatsapp" 
                 endDecorator={<FiPhone />}
                 color='danger'
                 style={{
                    border: '1px solid #BE9493',
                    borderRadius: '8px',
                    filter: 'drop-shadow(px 6px 6px rgba(0, 0, 0, 0.35))',
                    color: '#701210',
                 }}
                 />
            </FormControl>

            <FormControl>
                <FormLabel 
                style={{
                    color: '#701210',
                    opacity: '0.8',
                    fontSize: '14px',
                }}
                >Para qual empresa será o treinamento / palestra *</FormLabel>
                <Input
                 placeholder="Digite a empresa"
                 endDecorator={<FiShoppingBag />}
                 color='danger'
                 style={{
                    border: '1px solid #BE9493',
                    borderRadius: '8px',
                    filter: 'drop-shadow(px 6px 6px rgba(0, 0, 0, 0.35))',
                    color: '#701210',
                 }}
                 />
            </FormControl>

            <FormControl>
                <FormLabel 
                style={{
                    color: '#701210',
                    opacity: '0.8',
                    fontSize: '14px',
                }}
                >@ da empresa no instagram *</FormLabel>
                <Input
                 placeholder="Digite o instagram da empresa" 
                 endDecorator={<FiInstagram />}
                 color='danger'
                 style={{
                    border: '1px solid #BE9493',
                    borderRadius: '8px',
                    filter: 'drop-shadow(px 6px 6px rgba(0, 0, 0, 0.35))',
                    color: '#701210',
                 }}
                 />
            </FormControl>
        </div>
    )
}