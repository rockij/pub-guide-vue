<template>
	<main class="pub_status_board">
		<section class="group_header">
			<h1>OO프로젝트 현황판</h1>
			<div class="note">
				<ul>
					<li>
						<strong>업데이트 관리자:</strong>
						<span>김익중</span>
					</li>
					<li>
						<p>팝업 용어정리</p>
						<dl>
							<dt>알럿:AP</dt>
							<dd>시스템알럿 대신 띄우는 알럿</dd>
							<dt>전체팝업:FP</dt>
							<dd>디바이스 전체를 덮어쓰는 팝업</dd>
							<dt>바텀시트:BP</dt>
							<dd>화면 아래에서 올라오는 팝업, 디바이스 1/3 ~ 2/3을 차지함</dd>
							<dt>레이어팝업:LP</dt>
							<dd>화면 중앙으로 뜨는 안내성 팝업</dd>
						</dl>
					</li>
				</ul>
			</div>
		</section>
		<nav class="site_nav">
			<ul>
				<li v-for="(item, i) in tabMenu" :key="i">
					<button
						type="button"
						:class="menuWrap === item.active ? 'on' : ''"
						@click="menuWrap = item.active">
						{{ item.text }}
					</button>
				</li>
				<li>
					<a href="/PubGuide" target="_blank" class="type">공통가이드</a>
				</li>
			</ul>
		</nav>
		<div class="menu_wrap" :class="menuWrap">

			<!-- 공통 -->
			<section class="menu_list menu1">
				<h2>{{ tabMenu[1].text }}<small> (DEPTH1)</small></h2>
				<table>
					<thead>
						<tr>
							<th v-for="(item, i) in tableTh" :key="i" scope="col">
								{{ item.text }}
							</th>
						</tr>
					</thead>
					<tbody>
						<TableList
							v-for="(item, i) in common"
							:id="item.id"
							:category="item.category"
							:meta="item.meta"
							:end="item.end"
							:type="item.type"
							:story="item.story"
							:design="item.design"
							:comment="item.comment"
							:key="i"
							:depth2Name="tableTh[0].text"
							:depth3Name="tableTh[1].text"
							:depth4Name="tableTh[2].text"
							:depth5Name="tableTh[3].text"
							:typeName="tableTh[4].text"
							:idName="tableTh[5].text"
							:storyVer="tableTh[6].text"
							:designVer="tableTh[7].text"
							:endName="tableTh[8].text"
							:cmtName="tableTh[9].text"
							@update="iframeChange(item.path)" />
					</tbody>
				</table>
			</section>
			<!-- //공통 -->

			<!-- 메인 -->
			<section class="menu_list menu2">
				<h2>{{ tabMenu[2].text }}<small> (DEPTH1)</small></h2>
				<table>
					<thead>
						<tr>
							<th v-for="(item, i) in tableTh" :key="i" scope="col">
								{{ item.text }}
							</th>
						</tr>
					</thead>
					<tbody>
						<TableList
							v-for="(item, i) in main"
							:id="item.id"
							:category="item.category"
							:meta="item.meta"
							:end="item.end"
							:type="item.type"
							:story="item.story"
							:design="item.design"
							:comment="item.comment"
							:key="i"
							:depth2Name="tableTh[0].text"
							:depth3Name="tableTh[1].text"
							:depth4Name="tableTh[2].text"
							:depth5Name="tableTh[3].text"
							:typeName="tableTh[4].text"
							:idName="tableTh[5].text"
							:storyVer="tableTh[6].text"
							:designVer="tableTh[7].text"
							:endName="tableTh[8].text"
							:cmtName="tableTh[9].text"
							@update="iframeChange(item.path)" />
					</tbody>
				</table>
			</section>
			<!-- //메인 -->

			<!-- 이용내역 -->
			<section class="menu_list menu3">
				<h2>{{ tabMenu[3].text }}<small> (DEPTH1)</small></h2>
				<table>
					<thead>
						<tr>
							<th v-for="(item, i) in tableTh" :key="i" scope="col">
								{{ item.text }}
							</th>
						</tr>
					</thead>
					<tbody>
						<TableList
							v-for="(item, i) in usedetail"
							:id="item.id"
							:category="item.category"
							:meta="item.meta"
							:end="item.end"
							:type="item.type"
							:story="item.story"
							:design="item.design"
							:comment="item.comment"
							:key="i"
							:depth2Name="tableTh[0].text"
							:depth3Name="tableTh[1].text"
							:depth4Name="tableTh[2].text"
							:depth5Name="tableTh[3].text"
							:typeName="tableTh[4].text"
							:idName="tableTh[5].text"
							:storyVer="tableTh[6].text"
							:designVer="tableTh[7].text"
							:endName="tableTh[8].text"
							:cmtName="tableTh[9].text"
							@update="iframeChange(item.path)" />
					</tbody>
				</table>
			</section>
			<!-- //이용내역 -->

			<!-- 대금결제 -->
			<section class="menu_list menu4">
				<h2>{{ tabMenu[4].text }}<small> (DEPTH1)</small></h2>
				<table>
					<thead>
						<tr>
							<th v-for="(item, i) in tableTh" :key="i" scope="col">
								{{ item.text }}
							</th>
						</tr>
					</thead>
					<tbody>
						<TableList
							v-for="(item, i) in price"
							:id="item.id"
							:category="item.category"
							:meta="item.meta"
							:end="item.end"
							:type="item.type"
							:story="item.story"
							:design="item.design"
							:comment="item.comment"
							:key="i"
							:depth2Name="tableTh[0].text"
							:depth3Name="tableTh[1].text"
							:depth4Name="tableTh[2].text"
							:depth5Name="tableTh[3].text"
							:typeName="tableTh[4].text"
							:idName="tableTh[5].text"
							:storyVer="tableTh[6].text"
							:designVer="tableTh[7].text"
							:endName="tableTh[8].text"
							:cmtName="tableTh[9].text"
							@update="iframeChange(item.path)" />
					</tbody>
				</table>
			</section>
			<!-- //대금결제 -->

			<!-- 내카드관리 -->
			<section class="menu_list menu5">
				<h2>{{ tabMenu[5].text }}<small> (DEPTH1)</small></h2>
				<table>
					<thead>
						<tr>
							<th v-for="(item, i) in tableTh" :key="i" scope="col">
								{{ item.text }}
							</th>
						</tr>
					</thead>
					<tbody>
						<TableList
							v-for="(item, i) in mycard"
							:id="item.id"
							:category="item.category"
							:meta="item.meta"
							:end="item.end"
							:type="item.type"
							:story="item.story"
							:design="item.design"
							:comment="item.comment"
							:key="i"
							:depth2Name="tableTh[0].text"
							:depth3Name="tableTh[1].text"
							:depth4Name="tableTh[2].text"
							:depth5Name="tableTh[3].text"
							:typeName="tableTh[4].text"
							:idName="tableTh[5].text"
							:storyVer="tableTh[6].text"
							:designVer="tableTh[7].text"
							:endName="tableTh[8].text"
							:cmtName="tableTh[9].text"
							@update="iframeChange(item.path)" />
					</tbody>
				</table>
			</section>
			<!-- //내카드관리 -->

			<!-- 내정보관리 -->
			<section class="menu_list menu6">
				<h2>{{ tabMenu[6].text }}<small> (DEPTH1)</small></h2>
				<table>
					<thead>
						<tr>
							<th v-for="(item, i) in tableTh" :key="i" scope="col">
								{{ item.text }}
							</th>
						</tr>
					</thead>
					<tbody>
						<TableList
							v-for="(item, i) in myinfo"
							:id="item.id"
							:category="item.category"
							:meta="item.meta"
							:end="item.end"
							:type="item.type"
							:story="item.story"
							:design="item.design"
							:comment="item.comment"
							:key="i"
							:depth2Name="tableTh[0].text"
							:depth3Name="tableTh[1].text"
							:depth4Name="tableTh[2].text"
							:depth5Name="tableTh[3].text"
							:typeName="tableTh[4].text"
							:idName="tableTh[5].text"
							:storyVer="tableTh[6].text"
							:designVer="tableTh[7].text"
							:endName="tableTh[8].text"
							:cmtName="tableTh[9].text"
							@update="iframeChange(item.path)" />
					</tbody>
				</table>
			</section>
			<!--// 내정보관리 -->

			<!-- 혜택 -->
			<section class="menu_list menu7">
				<h2>{{ tabMenu[7].text }}<small> (DEPTH1)</small></h2>
				<table>
					<thead>
						<tr>
							<th v-for="(item, i) in tableTh" :key="i" scope="col">
								{{ item.text }}
							</th>
						</tr>
					</thead>
					<tbody>
						<TableList
							v-for="(item, i) in benefit"
							:id="item.id"
							:category="item.category"
							:meta="item.meta"
							:end="item.end"
							:type="item.type"
							:story="item.story"
							:design="item.design"
							:comment="item.comment"
							:key="i"
							:depth2Name="tableTh[0].text"
							:depth3Name="tableTh[1].text"
							:depth4Name="tableTh[2].text"
							:depth5Name="tableTh[3].text"
							:typeName="tableTh[4].text"
							:idName="tableTh[5].text"
							:storyVer="tableTh[6].text"
							:designVer="tableTh[7].text"
							:endName="tableTh[8].text"
							:cmtName="tableTh[9].text"
							@update="iframeChange(item.path)" />
					</tbody>
				</table>
			</section>
			<!-- //혜택 -->

			<!-- 결제 -->
			<section class="menu_list menu8">
				<h2>{{ tabMenu[8].text }}<small> (DEPTH1)</small></h2>
				<table>
					<thead>
						<tr>
							<th v-for="(item, i) in tableTh" :key="i" scope="col">
								{{ item.text }}
							</th>
						</tr>
					</thead>
					<tbody>
						<TableList
							v-for="(item, i) in payment"
							:id="item.id"
							:category="item.category"
							:meta="item.meta"
							:end="item.end"
							:type="item.type"
							:story="item.story"
							:design="item.design"
							:comment="item.comment"
							:key="i"
							:depth2Name="tableTh[0].text"
							:depth3Name="tableTh[1].text"
							:depth4Name="tableTh[2].text"
							:depth5Name="tableTh[3].text"
							:typeName="tableTh[4].text"
							:idName="tableTh[5].text"
							:storyVer="tableTh[6].text"
							:designVer="tableTh[7].text"
							:endName="tableTh[8].text"
							:cmtName="tableTh[9].text"
							@update="iframeChange(item.path)" />
					</tbody>
				</table>
			</section>
			<!-- //결제 -->

			<!-- 금융 -->
			<section class="menu_list menu9">
				<h2>{{ tabMenu[9].text }}<small> (DEPTH1)</small></h2>
				<table>
					<thead>
						<tr>
							<th v-for="(item, i) in tableTh" :key="i" scope="col">
								{{ item.text }}
							</th>
						</tr>
					</thead>
					<tbody>
						<TableList
							v-for="(item, i) in finance"
							:id="item.id"
							:category="item.category"
							:meta="item.meta"
							:end="item.end"
							:type="item.type"
							:story="item.story"
							:design="item.design"
							:comment="item.comment"
							:key="i"
							:depth2Name="tableTh[0].text"
							:depth3Name="tableTh[1].text"
							:depth4Name="tableTh[2].text"
							:depth5Name="tableTh[3].text"
							:typeName="tableTh[4].text"
							:idName="tableTh[5].text"
							:storyVer="tableTh[6].text"
							:designVer="tableTh[7].text"
							:endName="tableTh[8].text"
							:cmtName="tableTh[9].text"
							@update="iframeChange(item.path)" />
					</tbody>
				</table>
			</section>
			<!-- //금융 -->

			<!-- 생활편의 -->
			<section class="menu_list menu10">
				<h2>{{ tabMenu[10].text }}<small> (DEPTH1)</small></h2>
				<table>
					<thead>
						<tr>
							<th v-for="(item, i) in tableTh" :key="i" scope="col">
								{{ item.text }}
							</th>
						</tr>
					</thead>
					<tbody>
						<TableList
							v-for="(item, i) in living"
							:id="item.id"
							:category="item.category"
							:meta="item.meta"
							:end="item.end"
							:type="item.type"
							:story="item.story"
							:design="item.design"
							:comment="item.comment"
							:key="i"
							:depth2Name="tableTh[0].text"
							:depth3Name="tableTh[1].text"
							:depth4Name="tableTh[2].text"
							:depth5Name="tableTh[3].text"
							:typeName="tableTh[4].text"
							:idName="tableTh[5].text"
							:storyVer="tableTh[6].text"
							:designVer="tableTh[7].text"
							:endName="tableTh[8].text"
							:cmtName="tableTh[9].text"
							@update="iframeChange(item.path)" />
					</tbody>
				</table>
			</section>
			<!-- //생활편의 -->

			<!-- 카드 -->
			<section class="menu_list menu11">
				<h2>{{ tabMenu[11].text }}<small> (DEPTH1)</small></h2>
				<table>
					<thead>
						<tr>
							<th v-for="(item, i) in tableTh" :key="i" scope="col">
								{{ item.text }}
							</th>
						</tr>
					</thead>
					<tbody>
						<TableList
							v-for="(item, i) in card"
							:id="item.id"
							:category="item.category"
							:meta="item.meta"
							:end="item.end"
							:type="item.type"
							:story="item.story"
							:design="item.design"
							:comment="item.comment"
							:key="i"
							:depth2Name="tableTh[0].text"
							:depth3Name="tableTh[1].text"
							:depth4Name="tableTh[2].text"
							:depth5Name="tableTh[3].text"
							:typeName="tableTh[4].text"
							:idName="tableTh[5].text"
							:storyVer="tableTh[6].text"
							:designVer="tableTh[7].text"
							:endName="tableTh[8].text"
							:cmtName="tableTh[9].text"
							@update="iframeChange(item.path)" />
					</tbody>
				</table>
			</section>
			<!-- //카드 -->

			<!-- 공공/바우처 -->
			<section class="menu_list menu12">
				<h2>{{ tabMenu[12].text }}<small> (DEPTH1)</small></h2>
				<table>
					<thead>
						<tr>
							<th v-for="(item, i) in tableTh" :key="i" scope="col">
								{{ item.text }}
							</th>
						</tr>
					</thead>
					<tbody>
						<TableList
							v-for="(item, i) in voucher"
							:id="item.id"
							:category="item.category"
							:meta="item.meta"
							:end="item.end"
							:type="item.type"
							:story="item.story"
							:design="item.design"
							:comment="item.comment"
							:key="i"
							:depth2Name="tableTh[0].text"
							:depth3Name="tableTh[1].text"
							:depth4Name="tableTh[2].text"
							:depth5Name="tableTh[3].text"
							:typeName="tableTh[4].text"
							:idName="tableTh[5].text"
							:storyVer="tableTh[6].text"
							:designVer="tableTh[7].text"
							:endName="tableTh[8].text"
							:cmtName="tableTh[9].text"
							@update="iframeChange(item.path)" />
					</tbody>
				</table>
			</section>
			<!-- //공공/바우처 -->

			<!-- 고객센터 -->
			<section class="menu_list menu13">
				<h2>{{ tabMenu[13].text }}<small> (DEPTH1)</small></h2>
				<table>
					<thead>
						<tr>
							<th v-for="(item, i) in tableTh" :key="i" scope="col">
								{{ item.text }}
							</th>
						</tr>
					</thead>
					<tbody>
						<TableList
							v-for="(item, i) in customer"
							:id="item.id"
							:category="item.category"
							:meta="item.meta"
							:end="item.end"
							:type="item.type"
							:story="item.story"
							:design="item.design"
							:comment="item.comment"
							:key="i"
							:depth2Name="tableTh[0].text"
							:depth3Name="tableTh[1].text"
							:depth4Name="tableTh[2].text"
							:depth5Name="tableTh[3].text"
							:typeName="tableTh[4].text"
							:idName="tableTh[5].text"
							:storyVer="tableTh[6].text"
							:designVer="tableTh[7].text"
							:endName="tableTh[8].text"
							:cmtName="tableTh[9].text"
							@update="iframeChange(item.path)" />
					</tbody>
				</table>
			</section>
			<!-- //고객센터 -->
		</div>
	</main>
	<!-- <iframe src="../index.html" class="pub_status_preview"></iframe> -->
	<iframe
		:src="iframeUrl"
		name="view"
		marginheight="0"
		marginwidth="0"
		class="pub_status_preview"
		noresize=""></iframe>
</template>

<script setup>
import { ref } from 'vue'
import common from '@/publish/router/MenuCommon.js' //공통
import main from '@/publish/router/MenuMain.js' //메인
import usedetail from '@/publish/router/MenuUseDetail.js' //이용내역
import price from '@/publish/router/MenuPrice.js' //대금결제
import mycard from '@/publish/router/MenuMycard.js' //내카드관리
import myinfo from '@/publish/router/MenuMyinfo.js' //내정보관리
import benefit from '@/publish/router/MenuBenefit.js' //혜택
import payment from '@/publish/router/MenuPayment.js' //결제
import finance from '@/publish/router/MenuFinance.js' //금융
import living from '@/publish/router/MenuLiving.js' //생활편의
import card from '@/publish/router/MenuCard.js' //카드
import voucher from '@/publish/router/MenuVoucher.js' //공공/바우처
import customer from '@/publish/router/MenuCustomer.js' //고객센터
import TableList from './IndexViewList.vue'
const menuWrap = ref('all')
const tabMenu = ref([
	{
		text: '메뉴전체보기',
		active: 'all',
	},
	{
		text: '공통',
		active: 'menu1',
	},
	{
		text: '메인',
		active: 'menu2',
	},
	{
		text: '이용내역',
		active: 'menu3',
	},
	{
		text: '대금결제',
		active: 'menu4',
	},
	{
		text: '내카드관리',
		active: 'menu5',
	},
	{
		text: '내정보관리',
		active: 'menu6',
	},
	{
		text: '혜택',
		active: 'menu7',
	},
	{
		text: '결제',
		active: 'menu8',
	},
	{
		text: '금융',
		active: 'menu9',
	},
	{
		text: '생활편의',
		active: 'menu10',
	},
	{
		text: '카드',
		active: 'menu11',
	},
	{
		text: '공공/바우처',
		active: 'menu12',
	},
	{
		text: '고객센터',
		active: 'menu13',
	},
])
const tableTh = ref([
	{
		text: 'DEPTH2',
	},
	{
		text: 'DEPTH3',
	},
	{
		text: 'DEPTH4',
	},
	{
		text: 'DEPTH5',
	},
	{
		text: 'TYPE',
	},
	{
		text: 'ID',
	},
	{
		text: '기',
	},
	{
		text: '디',
	},
	{
		text: 'COMPLETE',
	},
	{
		text: 'COMMENT',
	},
])
const iframeUrl = ref('/COA100000')
function iframeChange(val) {
	iframeUrl.value = val
}
</script>
