<template>
	<main id="content">
		<!-- alert -->
		<VBtn
			:color="'primary'"
			:height="'m'"
			:variant="'back'"
			@click="dialog3 = true"
			aria-haspopup="dialog"
			:aria-controls="dialogId3"
			>alert</VBtn
		>
		<VDialog
			:type="'alert'"
			:dialog="dialog3"
			:id="dialogId3"
			:closeBtn="false"
			@close="dialog3 = false">
			<template #header><h2>타이틀</h2></template>
			<template #footer>
				<VBtn
					:color="'primary'"
					:height="'m'"
					:variant="'back'"
					:block="true"
					@click="dialog3 = false"
					>확인</VBtn
				>
			</template>
			팝업의 기본 내용 입력
		</VDialog>
		<!-- //alert -->

		<br /><br />

		<!-- center -->
		<VBtn
			:color="'primary'"
			:height="'m'"
			:variant="'back'"
			@click="dialog4 = true"
			aria-haspopup="dialog"
			:aria-controls="dialogId4"
			>center</VBtn
		>
		<VDialog :type="'center'" :dialog="dialog4" :id="dialogId4" @close="dialog4 = false">
			<template #header><h2>타이틀</h2></template>
			<template #footer>
				<div class="btnarea">
					<VBtn :color="'cancel'" :height="'m'" :variant="'back'" @click="dialog4 = false"
						>취소</VBtn
					>
					<VBtn
						:color="'primary'"
						:height="'m'"
						:variant="'back'"
						@click="dialog4 = false"
						>확인</VBtn
					>
				</div>
			</template>
			팝업의 기본 내용 입력
		</VDialog>
		<!-- //center -->

		<br /><br />

		<!-- center -->
		<VBtn
			:color="'primary'"
			:height="'m'"
			:variant="'back'"
			@click="dialog = true"
			aria-haspopup="dialog"
			:aria-controls="dialogId"
			>center &gt; dim x</VBtn
		>
		<VDialog
			:type="'center'"
			:dialog="dialog"
			:id="dialogId"
			:dim="false"
			@close="dialog = false">
			<template #header><h2>타이틀</h2></template>
			<template #footer>
				<VBtn :color="'primary'" :height="'m'" :variant="'back'" @click="dialog = false"
					>확인</VBtn
				>
			</template>
			팝업의 기본 내용 입력
		</VDialog>
		<!-- //center -->

		<br /><br />

		<!-- bottom-sheet -->
		<VBtn
			:color="'primary'"
			:height="'m'"
			:variant="'back'"
			@click="dialog2 = true"
			aria-haspopup="dialog"
			:aria-controls="dialogId2"
			>bottom-sheet</VBtn
		>
		<VDialog :type="'bottom'" :dialog="dialog2" :id="dialogId2" @close="dialog2 = false">
			<template #header><h2>타이틀</h2></template>
			<template #footer>
				<VBtn :color="'primary'" :height="'m'" :variant="'back'" @click="dialog2 = false"
					>확인</VBtn
				>
			</template>
			팝업의 기본 내용 입력
		</VDialog>
		<!-- //bottom-sheet -->

		<br /><br />

		<!-- bottom-sheet -->
		<VBtn
			:color="'primary'"
			:height="'m'"
			:variant="'back'"
			@click="dialog5 = true"
			aria-haspopup="dialog"
			:aria-controls="dialogId5"
			>bottom-sheet &gt; dim noevent</VBtn
		>
		<VDialog
			:type="'bottom'"
			:dialog="dialog5"
			:id="dialogId5"
			:dimTouch="false"
			@close="dialog5 = false">
			<template #header><h2>타이틀</h2></template>
			<template #footer>
				<VBtn :color="'primary'" :height="'m'" :variant="'back'" @click="dialog5 = false"
					>확인</VBtn
				>
			</template>
			팝업의 기본 내용 입력
		</VDialog>
		<!-- //bottom-sheet -->

		<br /><br />

		<!-- full -->
		<VBtn
			:color="'primary'"
			:height="'m'"
			:variant="'back'"
			@click="dialog6 = true"
			aria-haspopup="dialog"
			:aria-controls="dialogId6"
			>full</VBtn
		>
		<VDialog
			:type="'full'"
			:dialog="dialog6"
			:id="dialogId6"
			:dim="false"
			:dimTouch="false"
			@close="dialog6 = false">
			<template #header><h2>타이틀</h2></template>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi odit, ipsa saepe
			nesciunt aliquam obcaecati quam non voluptatem perferendis quae dolore atque amet ipsum
			facere architecto expedita! Repellat quisquam at, necessitatibus saepe quia sit, aperiam
			totam molestias reiciendis dignissimos animi obcaecati ut officia fugit a incidunt
			facilis? Sint sit itaque quas minus tempora reiciendis. Dicta, dolores. Quis
			exercitationem recusandae sunt optio, suscipit minima autem vitae laborum quo repellat
			corporis odio! Reiciendis fugit commodi dolorem autem aperiam quae. Illo tempore
			accusantium cupiditate dolorem nesciunt hic aspernatur nobis blanditiis, expedita a
			magnam iste, facilis rem. Dignissimos natus porro eaque fuga eum. Optio quas sunt
			eligendi aperiam esse aut, asperiores placeat non, culpa assumenda est explicabo fuga
			enim quisquam recusandae possimus! Ea fuga iste possimus facilis autem! Similique
			provident hic fugiat explicabo nobis culpa et molestias eum officia nisi? Sed suscipit
			quo neque provident adipisci? Animi, id doloremque. Optio numquam impedit ut pariatur
			explicabo beatae atque sunt suscipit quia assumenda quaerat, harum error praesentium
			expedita porro modi id cum eaque recusandae quos quis incidunt nesciunt quam odio! Sequi
			nobis consequuntur quisquam odio ipsum error deleniti voluptatem? Laboriosam, enim
			consectetur quisquam voluptatum cum voluptate ea dolorem quaerat aliquid! Vitae, eum
			temporibus! Veritatis tenetur deleniti error eaque architecto porro modi possimus,
			dignissimos sequi quia quis dolor at iste eligendi? Quos commodi, voluptate nemo magnam
			repellat a illum deserunt, nam reprehenderit laboriosam, tenetur delectus recusandae
			eveniet totam. Eos quod similique saepe, vero laborum consequatur quos esse dignissimos
			molestias at magni accusamus cumque aliquam sequi distinctio necessitatibus culpa
			tempore velit cupiditate nulla aliquid quam laudantium? Voluptas odit nihil corporis
			beatae labore magni iure error! Error corrupti, voluptas nihil unde sequi temporibus
			neque et asperiores excepturi quia obcaecati aperiam dolorum. Voluptatum, fuga minima
			laboriosam impedit delectus omnis veritatis repellat! A vero est velit libero,
			cupiditate quidem? Amet possimus deserunt recusandae at, quae in, repellendus, hic vel
			sapiente ratione nemo rerum vero natus. Porro enim facere officia ad, nihil tempora ex,
			iure fuga eum excepturi debitis! Facilis quos eveniet earum temporibus sint molestias
			sapiente quas provident inventore labore repellat aut, magnam reiciendis incidunt
			deleniti voluptates? Eos, sit totam provident, ratione corporis nesciunt, ut blanditiis
			magnam adipisci praesentium illo tenetur accusamus iure. Molestiae enim, dolor
			exercitationem qui cumque in numquam sint, reiciendis sapiente ullam corporis
			distinctio. Praesentium tempora a nisi, voluptates eveniet aut! Odio distinctio ab
			ducimus harum recusandae fugit voluptatem velit, maxime et, nostrum quas, doloribus
			labore animi eum incidunt enim aspernatur quam. Officia architecto nihil debitis veniam
			consequatur deserunt facilis culpa labore minus ab tenetur quo laborum nobis odio,
			provident dolorum ex maiores sit qui vel nisi doloribus? Rerum ex porro animi deserunt
			est consectetur obcaecati autem dolorem! Est sed, saepe recusandae illum magnam
			voluptate ad, assumenda ea incidunt hic magni iure delectus ducimus doloribus laborum in
			ipsa corporis maxime quidem aliquid et deserunt reprehenderit quas dolorem. Laboriosam
			sunt iusto corrupti quaerat, quisquam, explicabo molestias error totam eaque eum,
			expedita debitis fuga distinctio. Vel sit beatae adipisci est tenetur dignissimos
			quibusdam cum ullam doloremque libero? Animi quidem in beatae, necessitatibus quasi
			nulla cumque eius itaque atque adipisci quisquam ea est, suscipit reiciendis blanditiis
			minus nihil illum nisi tenetur! Aspernatur magni quasi suscipit iste, libero porro animi
			esse vel omnis doloribus, repellat dolorem nulla quibusdam doloremque. Provident
			deserunt, ea velit est quibusdam quos exercitationem veritatis fugiat perspiciatis
			quisquam, dolorum quod at aperiam architecto magnam repellendus repellat et explicabo
			eligendi odit! Quae accusantium autem suscipit. Dolor, fugiat ipsam error eaque quia
			porro eveniet temporibus, tempora facilis molestiae nesciunt quod voluptas sint
			consectetur esse adipisci ex molestias aliquam qui architecto nihil? Quod id vel,
			dolores repudiandae asperiores ipsum impedit ab cumque molestiae nesciunt sit inventore
			dignissimos reprehenderit doloremque explicabo, consequuntur assumenda deserunt iusto
			non optio minus, excepturi error esse. Corrupti vero quam earum repellat facilis amet,
			tenetur ratione eius minima qui aliquid similique assumenda, quo harum porro expedita
			sequi libero nam et ea eveniet omnis, officiis necessitatibus! Soluta eos possimus,
			magnam repellat aliquam nulla recusandae sit tempora eius. Eveniet inventore ratione
			ducimus soluta numquam quidem nisi. Eum, corrupti. Consequuntur sint, aut sed commodi
			facilis mollitia accusamus ab vel debitis error exercitationem similique dolores odit
			quidem recusandae ut soluta ad non sunt magnam harum. Nulla alias voluptas pariatur at
			similique provident facilis, suscipit, blanditiis debitis quisquam repudiandae ducimus.
			Necessitatibus nobis totam velit cum, nostrum laudantium praesentium eius. Aliquam
			dolorum ipsum quisquam consectetur dolor voluptate sapiente aspernatur rem, ab non
			voluptatem. Enim, dolorem sapiente. Ab magni dolores nobis cupiditate, voluptatem modi
			tempora dolorum dolorem repudiandae omnis cum quis quisquam sit? Provident, obcaecati
			aut doloribus tempore ut ipsam aperiam voluptates tenetur labore voluptatem explicabo
			atque dolorem iusto porro maxime debitis laboriosam suscipit cum modi nemo neque eaque.
			Magni recusandae mollitia adipisci impedit molestiae harum commodi ea nostrum sint fugit
			temporibus cumque natus amet perspiciatis quisquam doloribus, iste maiores molestias
			expedita. Quam cum nobis blanditiis quos culpa pariatur ex impedit, optio doloribus,
			reiciendis consectetur facere, ipsam vero magni neque vitae asperiores dolorem possimus
			nihil ipsum. Exercitationem nostrum velit blanditiis facere voluptatem ab alias commodi
			necessitatibus? Cumque dolore facere eius recusandae placeat reiciendis provident,
			repudiandae voluptatum quia corporis quis molestiae ipsa. Libero, accusantium magnam.
			Ullam fugiat quod minima harum magnam doloribus distinctio laborum dolorum modi. Quis,
			fugit vitae sunt esse pariatur voluptatum reiciendis doloremque facilis consequuntur
			sint ab dolor beatae debitis molestias architecto aperiam asperiores atque cumque
			mollitia? Animi rerum eligendi deserunt ex porro perferendis velit, ea corporis, aperiam
			nesciunt repellat totam sunt nam est debitis illum recusandae inventore? Incidunt, rem
			fuga! Impedit omnis modi amet a rem quaerat, iusto doloremque dignissimos nihil saepe
			perferendis quos itaque quisquam praesentium, eveniet in. At dolore, autem eaque illum
			in culpa voluptatem facere eligendi tempora mollitia delectus, laudantium repellendus
			quam velit cum veritatis molestiae, minus sit fuga? Temporibus vitae eum iusto accusamus
			perferendis quasi atque aspernatur veritatis incidunt totam? Totam eaque doloremque
			magnam culpa consectetur maxime ipsam nostrum omnis alias tempore officiis velit
			possimus enim suscipit quasi earum debitis ipsa modi facilis, quo eveniet et ut maiores.
			Possimus autem neque aliquid ab, molestias quas alias minus similique officia eveniet!
		</VDialog>
		<!-- //full -->
	</main>
</template>

<script setup>
import VBtn from '@/publish/components/VButton.vue'
import VDialog from '@/publish/components/VDialog.vue'
import { ref } from 'vue'
const dialog = ref(false)
const dialog2 = ref(false)
const dialog3 = ref(false)
const dialog4 = ref(false)
const dialog5 = ref(false)
const dialog6 = ref(false)
const dialogId = ref('dialogPopup')
const dialogId2 = ref('dialogPopup2')
const dialogId3 = ref('dialogPopup3')
const dialogId4 = ref('dialogPopup4')
const dialogId5 = ref('dialogPopup5')
const dialogId6 = ref('dialogPopup6')
</script>

<style lang="scss" scoped>
main {
	padding: 30px 20px 1000px;
}
</style>
