import styles from './styles.module.scss'

export default function Product() {
  return (
<main className={styles.container}>

<div>Categoria</div>

<form action="">


<input type="text"
name='name'
placeholder='Nome da Categoria '
className='input'
required
/>

<button>
cadastrar
</button>

</form>
</main>
  )
}
