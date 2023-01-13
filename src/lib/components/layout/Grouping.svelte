<div class="section">
	<span class="title">
		<slot name="title" />
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
		background-color: var(--background-color);
		padding-left: 3px;
		padding-right: 3px;
		top: -10px;
		left: 20px;
	}

	.content {
		padding: 10px;
	}
</style>
