import { FormControl } from '@mui/joy'
import FormLabel from '@mui/joy/FormLabel'
import Input from '@mui/joy/Input'
import {FiPieChart, FiCompass, FiBriefcase} from 'react-icons/fi'

export default function FormStep2(){
    return(
        <div className="flex flex-col gap-2">
            <FormControl>
                <FormLabel 
                style={{
                    color: '#701210',
                    opacity: '0.8',
                    fontSize: '14px',
                }}
                >Área de atuação da empresa *</FormLabel>
                <Input
                 placeholder="Área"
                 endDecorator={<FiBriefcase />}
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
                >Quantidade de funcionários da empresa *</FormLabel>
                <Input
                 placeholder="Quantidade"
                 endDecorator={<FiPieChart />}
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
                >Por que deseja oferecer o treinamento/palestra para sua equipe? *</FormLabel>
                <Input
                 placeholder="Obersavação"
                 endDecorator={<FiCompass />}
                 color='danger'
                 style={{
                    border: '1px solid #BE9493',
                    borderRadius: '8px',
                    filter: 'drop-shadow(px 6px 6px rgba(0, 0, 0, 0.35))',
                    color: '#701210',
                    height: '10vh',
                 }}
                 />
            </FormControl>
        </div>
    )
}