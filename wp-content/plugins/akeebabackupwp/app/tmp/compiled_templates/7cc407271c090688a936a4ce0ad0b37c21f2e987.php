<?php /* /home/site/wwwroot/wp-content/plugins/akeebabackupwp/app/Solo/ViewTemplates/Main/warning_adblock.blade.php */ ?>
<?php
/**
 * @package   solo
 * @copyright Copyright (c)2014-2020 Nicholas K. Dionysopoulos / Akeeba Ltd
 * @license   GNU General Public License version 3, or later
 */

defined('_AKEEBA') or die();

// Used for type hinting
/** @var \Solo\View\Main\Html $this */

?>
<div id="adblock-warning" class="akeeba-block--failure" style="display: none;">
	<?php echo \Awf\Text\Text::_('SOLO_SETUP_LBL_ADBLOCK_WARNING'); ?>
</div>
