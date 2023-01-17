<div class="section">
	<span class="title">
		<div class="title-backer" />
		<span class="title-text"><slot name="title" /></span>
	</span>
	<div class="content">
		<slot />
	</div>
</div>

<style>
	.section {
		border: 1px solid #999999;
		border-radius: 5px;
		position: relative;
		margin-top: 5px;
		margin-bottom: 20px;
	}

	.title {
		position: absolute;
		color: var(--mcc-blue);
		display: inline-block;
		/* background-color: var(--background-color-alt); */
		padding-left: 2px;
		padding-right: 2px;
		top: -10px;
		left: 20px;
	}
	.title-text {
		position: relative;
		z-index: 10;
	}
	.title-backer {
		position: absolute;
		top: 9px;
		border-top: 1px solid var(--background-color-alt);
		margin-left: -2px;
		width: 100%;
		height: 10px;
		z-index: 0;
	}

	.content {
		padding: 10px;
		background-color: var(--background-color-alt);
	}
</style>
