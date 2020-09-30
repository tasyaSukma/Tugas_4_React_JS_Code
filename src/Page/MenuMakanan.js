import React, {Component} from 'react';
import ListMakanan from './../ListData/ListMakanan';

class MenuMakanan extends Component{
	constructor(props){
		super(props)
		this.state={
			pesan: "",
			jumlah: 0,
			tampil: false
		}

		this.pilihPesanan = this.pilihPesanan.bind(this)
		this.batal = this.batal.bind(this)
		this.nasiPadang = this.nasiPadang.bind(this)
		this.sate = this.sate.bind(this)
		this.soto = this.soto.bind(this)
		this.nasiUduk = this.nasiUduk.bind(this)
		this.nasiKuning = this.nasiKuning.bind(this)
	}

	pilihPesanan(param,e){
		e.preventDefault()
		var temp = e.target.value
		this.setState(function(state,props){
			return{
				[param] : temp,
				tampil : true
			}
		});
	}

	nasiPadang(e){
		e.preventDefault()
		this.setState(function(state,props){
			return{
				pesan : "Nasi Padang",
				jumlah : state.jumlah + 1,
				tampil : true
			}
		})
	}

	sate(e){
		e.preventDefault()
		this.setState(function(state,props){
			return{
				pesan : "Sate",
				jumlah : state.jumlah + 1,
				tampil : true
			}
		})
	}

	soto(e){
		e.preventDefault()
		this.setState(function(state,props){
			return{
				pesan : "Soto",
				jumlah : state.jumlah + 1,
				tampil : true
			}
		})
	}

	nasiUduk(e){
		e.preventDefault()
		this.setState(function(state,props){
			return{
				pesan : "Nasi Uduk",
				jumlah : state.jumlah + 1,
				tampil : true
			}
		})
	}

	nasiKuning(e){
		e.preventDefault()
		this.setState(function(state,props){
			return{
				pesan : "Nasi Kuning",
				jumlah : state.jumlah + 1,
				tampil : true
			}
		})
	}

	batal(e){
		e.preventDefault()
		this.setState((state,props) =>({
			pesan : "",
			jumlah : 0,
			tampil : false
		}));
	}

	render(){
		return(
			<div>
				<h3>Daftar Makanan Yang Kami Sediakan : </h3><br/>
				<table>
					<tr>
						<td>
							<ListMakanan dataUrl="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"/>
							<center>
								<button onClick = {(e) => this.nasiPadang(e)}>Pesan Sekarang</button>
							</center>
						</td>
						<td>
							<ListMakanan dataUrl="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"/>
							<center>
								<button onClick = {(e) => this.sate(e)}>Pesan Sekarang</button>
							</center>
						</td>
						<td>
							<ListMakanan dataUrl="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"/>
							<center>
								<button onClick = {(e) => this.soto(e)}>Pesan Sekarang</button>
							</center>
						</td>
						<td>
							<ListMakanan dataUrl="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png"/>
							<center>
								<button onClick = {(e) => this.nasiUduk(e)}>Pesan Sekarang</button>
							</center>
						</td>
						<td>
							<ListMakanan dataUrl="https://blog.tokowahab.com/wp-content/uploads/2020/03/Resep-Nasi-Kuning-Tumpeng-Mini.jpg"/>
							<center>
								<button onClick = {(e) => this.nasiKuning(e)}>Pesan Sekarang</button>
							</center>
						</td>
					</tr>
				</table>
				<br/>
				<input type="text" placeholder = "Masukan Pesanan Anda" onChange={(e) => this.pilihPesanan("pesan", e)}/>
				<input type="number" placeholder = "Jumlah Pesanan" onChange={(e) => this.pilihPesanan("jumlah",e)}/>
				<button onClick={(e) => this.batal(e)}>Batalkan Semua Pesanan</button>

				{this.state.tampil === true ? 
					(
						<>
						<h3>Pesanan Anda : {this.state.pesan}</h3>
						<h3>Jumlah : {this.state.jumlah}</h3>
						</>
					) : (
						<center>
							<h1>Anda Belum Memesan</h1>
						</center>
					)}				
			</div>
		)
	}
}

export default MenuMakanan;