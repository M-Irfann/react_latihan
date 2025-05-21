export default function MenuResto(){
    const data = [
        {nama: "irfan",kelas:"pagi"},
        {nama: "zaki",kelas:"malam"},
        {nama: "yana",kelas:"pagi"}
]

    return (
        <>
            {
                data.map((item, index) => {
                    return(
                        <>nama : {item.nama} kelas : {item.kelas}<br /></>  
                    )
                })
            }
        </>
    )
}