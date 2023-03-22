<script lang="ts">
</script>

<div>
	<form action="" class="my-5">

		<h2>Dados do paciente</h2>
		<div class="row g-3">
			<div class="col-md-8">
				<label for="fullName" class="form-label">Nome completo</label>
				<input type="text" class="form-control" id="fullName" name="fullName">
			</div>
			<div class="col-md-4">
				<label for="birthday" class="form-label">Data de Nasc.</label>
				<input type="date" class="form-control" id="birthday" name="birthday">
			</div>
			<div class="col-md-12">
				<label for="address" class="form-label">Endereço</label>
				<input type="text" class="form-control" id="address" name="address">
			</div>
			<div class="col-md-3">
				<label for="neighborhood" class="form-label">Bairro</label>
				<input type="text" class="form-control" id="neighborhood" name="neighborhood">
			</div>
			<div class="col-md-3">
				<label for="cep" class="form-label">Cep</label>
				<input type="text" class="form-control" id="cep" name="cep" placeholder="00000-00">
			</div>
			<div class="col-md-6">
				<label for="email" class="form-label">Email</label>
				<input type="email" class="form-control" id="email" name="email" placeholder="exemplo@gmail.com">
			</div>
		</div>

		<h2>Dados da massagem</h2>
		<div class="row g-3">
			<div class="col-md-12">
				<div class="form-check form-check-inline">
					<input class="form-check-input" type="radio" name="massagemTypes" id="massagemType1" value="modeladora">
					<label class="form-check-label" for="massagemType1">Modeladora</label>
				</div>
				<div class="form-check form-check-inline">
					<input class="form-check-input" type="radio" name="massagemTypes" id="massagemType2" value="relaxante">
					<label class="form-check-label" for="massagemType2">Relaxante</label>
				</div>
				<div class="form-check form-check-inline">
					<input class="form-check-input" type="radio" name="massagemTypes" id="massagemType3" value="drenagem">
					<label class="form-check-label" for="massagemType3">Drenagem</label>
				</div>
				<div class="form-check form-check-inline">
					<input class="form-check-input" type="radio" name="massagemTypes" id="massagemType4" value="outra">
					<label class="form-check-label" for="massagemType4">Outras</label>
				</div>
			</div>

			<div class="col-md-12">
				<label for="massageWhat" class="form-label">Qual?</label>
				<input type="massageWhat" class="form-control" id="massageWhat" name="massageWhat">
			</div>

			<div class="col-md-12">
				<label for="massageProduct" class="form-label">Produto Utilizado</label>
				<input type="massageProduct" class="form-control" id="massageProduct" name="massageProduct">
			</div>

			<div class="col-md-6">
				<div class="align-items-center d-flex">
					<label for="" class="col-form-label me-3">Já realizou massagem anteriormente?</label>

					<div class="form-check form-check-inline">
						<input class="form-check-input" type="radio" name="massageLast" id="massageLast1" value="true">
						<label class="form-check-label" for="massageLast1">Sim</label>
					</div>

					<div class="form-check form-check-inline">
						<input class="form-check-input" type="radio" name="massageLast" id="massageLast2" value="false">
						<label class="form-check-label" for="massageLast2">Não</label>
					</div>

				</div>
			</div>

			<div class="col-md-6 inline">
				<div class="row">
					<label for="massageLastWhat" class="col-sm-2 col-form-label">Qual?</label>
					<div class="col-sm-10">
						<input type="massageLastWhat" class="form-control" id="massageLastWhat" name="massageLastWhat">
					</div>
				</div>
			</div>

		</div>

		<h2>Contra indicações</h2>
		<div class="row g-3">
			<div class="col-md-12 mb-4">
				<div class="align-items-center d-flex">
					<div class="form-check form-check-inline">
						<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
						<label class="form-check-label" for="inlineCheckbox1">Gravidez?</label>
					</div>
					<label for="" class="me-2">Quantos meses?</label>
					<div class="col-sm-6">
						<input type="massageLastWhat" class="form-control" id="massageLastWhat" name="massageLastWhat">
					</div>
				</div>
			</div>

			<div class="col-md-12 mb-4">
				<div class="align-items-center d-flex">
					<div class="form-check form-check-inline">
						<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
						<label class="form-check-label" for="inlineCheckbox1">Caso de câncer na família?</label>
					</div>
					<label for="" class="me-2">Quem?</label>
					<div class="col-sm-3">
						<input type="massageLastWhat" class="form-control" id="massageLastWhat" name="massageLastWhat">
					</div>
					<label for="" class="mx-2">Qto. tempo?</label>
					<div class="col-sm-3">
						<input type="massageLastWhat" class="form-control" id="massageLastWhat" name="massageLastWhat">
					</div>
				</div>
			</div>

			<div class="col-md-12 mb-4">
				<div class="align-items-center d-flex">
					<div class="form-check form-check-inline">
						<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
						<label class="form-check-label" for="inlineCheckbox1">Algum parafuso ou plaqueta implantados?</label>
					</div>
					<label for="" class="me-2"> Onde?</label>
					<div class="col-sm-3">
						<input type="massageLastWhat" class="form-control" id="massageLastWhat" name="massageLastWhat">
					</div>
				</div>
			</div>

			<div class="col-md-12 mb-4">
				<div class="align-items-center d-flex">
					<div class="form-check form-check-inline">
						<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
						<label class="form-check-label" for="inlineCheckbox1">Realizou alguma cirurgia?</label>
					</div>
					<label for="" class="me-2">Onde?</label>
					<div class="col-sm-3">
						<input type="massageLastWhat" class="form-control" id="massageLastWhat" name="massageLastWhat">
					</div>
					<label for="" class="mx-2">Qto. tempo?</label>
					<div class="col-sm-3">
						<input type="massageLastWhat" class="form-control" id="massageLastWhat" name="massageLastWhat">
					</div>
				</div>
			</div>

			<div class="col-md-12 mb-4">
				<div class="align-items-center d-flex">
					<div class="form-check form-check-inline">
						<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
						<label class="form-check-label" for="inlineCheckbox1">Hipertensão ou Hipotensão?</label>
					</div>
				</div>
			</div>

			<div class="col-md-12 mb-4">
				<div class="align-items-center d-flex">
					<div class="form-check form-check-inline">
						<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
						<label class="form-check-label" for="inlineCheckbox1">Menstruação com fluxo alto?</label>
					</div>
				</div>
			</div>

			<div class="col-md-12 mb-4">
				<div class="align-items-center d-flex">
					<div class="form-check form-check-inline">
						<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
						<label class="form-check-label" for="inlineCheckbox1">Mioma?</label>
					</div>
				</div>
			</div>

			<div class="col-md-12 mb-4">
				<div class="align-items-center d-flex">
					<div class="form-check form-check-inline">
						<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
						<label class="form-check-label" for="inlineCheckbox1">Usa DIU?</label>
					</div>
				</div>
			</div>

			<div class="col-md-12 mb-4">
				<div class="align-items-center d-flex">
					<div class="form-check form-check-inline">
						<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
						<label class="form-check-label" for="inlineCheckbox1">Cisto no ovário ou em alguma outra área?</label>
					</div>
				</div>
			</div>

			<div class="col-md-12 mb-4">
				<div class="align-items-center d-flex">
					<div class="form-check form-check-inline">
						<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
						<label class="form-check-label" for="inlineCheckbox1">Algum tipo de hérnia?</label>
					</div>
					<label for="" class="me-2">Onde?</label>
					<div class="col-sm-3">
						<input type="massageLastWhat" class="form-control" id="massageLastWhat" name="massageLastWhat">
					</div>
				</div>
			</div>

			<div class="col-md-12 mb-4">
				<div class="align-items-center d-flex">
					<div class="form-check form-check-inline">
						<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
						<label class="form-check-label" for="inlineCheckbox1">Marca passo?</label>
					</div>
				</div>
			</div>

			<div class="col-md-12 mb-4">
				<div class="align-items-center d-flex">
					<div class="form-check form-check-inline">
						<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
						<label class="form-check-label" for="inlineCheckbox1">Alguma fratura recente?</label>
					</div>
					<label for="" class="me-2">Onde?</label>
					<div class="col-sm-3">
						<input type="massageLastWhat" class="form-control" id="massageLastWhat" name="massageLastWhat">
					</div>
				</div>
			</div>

			<div class="col-md-12 mb-4">
				<div class="align-items-center d-flex">
					<div class="form-check form-check-inline">
						<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
						<label class="form-check-label" for="inlineCheckbox1">Algum corte ou machucado?</label>
					</div>
					<label for="" class="me-2">Onde?</label>
					<div class="col-sm-3">
						<input type="massageLastWhat" class="form-control" id="massageLastWhat" name="massageLastWhat">
					</div>
				</div>
			</div>

			<div class="col-md-12 mb-4">
				<div class="align-items-center d-flex">
					<div class="form-check form-check-inline">
						<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
						<label class="form-check-label" for="inlineCheckbox1">Algum processo de degeneração óssea ou muscular?</label>
					</div>
					<label for="" class="me-2">Qual?</label>
					<div class="col-sm-3">
						<input type="massageLastWhat" class="form-control" id="massageLastWhat" name="massageLastWhat">
					</div>
				</div>
			</div>

			<div class="col-md-12 mb-4">
				<div class="align-items-center d-flex">
					<div class="form-check form-check-inline">
						<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
						<label class="form-check-label" for="inlineCheckbox1">Faz uso de medicamento?</label>
					</div>
					<label for="" class="me-2">Qual?</label>
					<div class="col-sm-3">
						<input type="massageLastWhat" class="form-control" id="massageLastWhat" name="massageLastWhat">
					</div>
					<label for="" class="mx-2">Por que?</label>
					<div class="col-sm-3">
						<input type="massageLastWhat" class="form-control" id="massageLastWhat" name="massageLastWhat">
					</div>
				</div>
			</div>

			<div class="col-md-12 mb-4">
				<div class="align-items-center d-flex">
					<div class="form-check form-check-inline">
						<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
						<label class="form-check-label" for="inlineCheckbox1">Realizando algum tipo de tratamento?</label>
					</div>
					<label for="" class="me-2">Qual?</label>
					<div class="col-sm-3">
						<input type="massageLastWhat" class="form-control" id="massageLastWhat" name="massageLastWhat">
					</div>
				</div>
			</div>
		</div>

		<h2>Hábitos</h2>
		<div class="row g-3">
			<div class="col-md-12 mb-4">
				<div class="align-items-center d-flex">
					<div class="form-check form-check-inline">
						<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
						<label class="form-check-label" for="inlineCheckbox1">Fuma?</label>
					</div>
				</div>
			</div>

			<div class="col-md-12 mb-4">
				<div class="align-items-center d-flex">
					<div class="form-check form-check-inline">
						<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
						<label class="form-check-label" for="inlineCheckbox1">Bebe?</label>
					</div>
				</div>
			</div>

			<div class="col-md-12 mb-4">
				<div class="align-items-center d-flex">
					<div class="form-check form-check-inline">
						<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
						<label class="form-check-label" for="inlineCheckbox1">Bebe água diariamente?</label>
					</div>
					<label for="" class="me-2">Qtos copos em média?</label>
					<div class="col-sm-3">
						<input type="massageLastWhat" class="form-control" id="massageLastWhat" name="massageLastWhat">
					</div>
				</div>
			</div>

			<div class="col-md-12 mb-4">
				<div class="align-items-center d-flex">
					<div class="form-check form-check-inline">
						<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
						<label class="form-check-label" for="inlineCheckbox1">Faz exercícios físicos?</label>
					</div>
					<label for="" class="me-2">Qual periodicidade?</label>
					<div class="col-sm-3">
						<input type="massageLastWhat" class="form-control" id="massageLastWhat" name="massageLastWhat">
					</div>
				</div>
			</div>

			<div class="col-md-12 mb-4">
				<div class="align-items-center d-flex">
					<div class="form-check form-check-inline">
						<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
						<label class="form-check-label" for="inlineCheckbox1">Trabalha?</label>
					</div>
					<label for="" class="me-2">Em que?</label>
					<div class="col-sm-3">
						<input type="massageLastWhat" class="form-control" id="massageLastWhat" name="massageLastWhat">
					</div>
				</div>
			</div>

		</div>

		<h2>Informações Adicionais</h2>
		<div class="row g-3">
			<div class="col-md-12">
				<label for="fullName" class="form-label"></label>
				<textarea class="form-control" id="fullName" name="fullName" rows="8"/>
			</div>
		</div>

		<div class="row">
			<div class="col-12 text-center p-4">
				<button class="btn btn-lg btn-primary">Enviar</button>
			</div>
		</div>
	</form>
</div>

<style lang="scss">
	h2 {
		font-size: 1.2rem;
		color: var(--bs-indigo);
		font-weight: 300;
		margin: 2rem 0;
		display: block;
		border-bottom: 4px dotted #ccc;
		padding-bottom: .5rem;
	}
</style>
